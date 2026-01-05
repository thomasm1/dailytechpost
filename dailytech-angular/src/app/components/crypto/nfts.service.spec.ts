import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { NftsService } from './nfts.service';
import { KeysService } from '../../service/keys.service';
import { environment } from '../../../environments/environment';
import { of, throwError } from 'rxjs';

describe('NftsService', () => {
  let service: NftsService;
  let httpMock: HttpTestingController;
  let mockKeysService: jasmine.SpyObj<KeysService>;

  // Sample test data following DRY principle and coding instructions
  const mockNftData = {
    chain: 'eth',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    nfts: [
      {
        token_id: '1',
        name: 'CryptoPunk #1234',
        symbol: 'PUNK',
        token_uri: 'ipfs://QmHash123',
        metadata: { image: 'ipfs://QmImage123' }
      },
      {
        token_id: '2',
        name: 'Bored Ape #5678',
        symbol: 'BAYC',
        token_uri: 'ipfs://QmHash456',
        metadata: { image: 'ipfs://QmImage456' }
      }
    ]
  };

  const mockChainAddress = {
    chain: 'eth',
    address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb'
  };

  beforeEach(() => {
    // Create test doubles following Michael Feathers' seam extraction pattern
    mockKeysService = jasmine.createSpyObj('KeysService', ['getMoralisKey']);
    mockKeysService.getMoralisKey.and.returnValue('test-moralis-api-key');

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        NftsService,
        { provide: KeysService, useValue: mockKeysService }
      ]
    });

    service = TestBed.inject(NftsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verify no outstanding HTTP requests after each test
    httpMock.verify();
  });

  // Unit of work: service initialization
  // Scenario: valid dependencies provided
  // Expected behavior: service instance created with API key
  describe('service_initialization', () => {
    it('should_create_service_instance_when_dependencies_provided', () => {
      // Assert
      expect(service).toBeTruthy();
      expect(service).toBeInstanceOf(NftsService);
    });

    it('should_retrieve_moralis_api_key_from_keysService_on_construction', () => {
      // Assert
      expect(mockKeysService.getMoralisKey).toHaveBeenCalled();
      expect(service.key).toBe('test-moralis-api-key');
    });

    it('should_initialize_with_ethereum_as_default_chain', () => {
      // Assert
      expect(service.chain).toBe('eth');
    });

    it('should_initialize_with_empty_nfts_and_tokens_arrays', () => {
      // Assert
      expect(service.nfts).toEqual([]);
      expect(service.tokens).toEqual([]);
    });

    it('should_have_subject_observables_for_data_updates', () => {
      // Assert
      expect(service.nftsUpdated).toBeDefined();
      expect(service.chainDataUpdated).toBeDefined();
    });
  });

  // Unit of work: collectNfts
  // Scenario: API returns NFT data successfully
  // Expected behavior: NFT data returned as observable
  describe('collectNfts', () => {
    it('should_return_nft_data_when_api_call_succeeds', fakeAsync(() => {
      // Arrange
      const expectedUrl = `${environment.nft_url}/nft`;
      let actualData: any;

      // Act
      service.collectNfts().subscribe(data => {
        actualData = data;
      });

      // Assert - verify HTTP request
      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('GET');

      // Respond with mock data
      req.flush(mockNftData);
      tick();

      expect(actualData).toEqual(mockNftData);
    }));

    it('should_call_correct_nft_endpoint_with_get_method', () => {
      // Arrange
      const expectedUrl = `${environment.nft_url}/nft`;

      // Act
      service.collectNfts().subscribe();

      // Assert
      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockNftData);
    });

    it('should_handle_http_error_gracefully_with_user_friendly_message', fakeAsync(() => {
      // Arrange
      const errorResponse = new HttpErrorResponse({
        error: 'API Error',
        status: 500,
        statusText: 'Internal Server Error'
      });
      let errorMessage: string;

      // Act
      service.collectNfts().subscribe(
        () => fail('Should have failed with error'),
        (error: Error) => {
          errorMessage = error.message;
        }
      );

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      req.flush('API Error', errorResponse);
      tick();

      expect(errorMessage).toBe('Something bad happened; please try again later.');
    }));

    it('should_handle_network_error_when_request_fails', fakeAsync(() => {
      // Arrange
      const errorEvent = new ErrorEvent('Network error', {
        message: 'Connection timeout'
      });
      let errorOccurred = false;

      // Act
      service.collectNfts().subscribe(
        () => fail('Should have failed'),
        () => {
          errorOccurred = true;
        }
      );

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      req.error(errorEvent);
      tick();

      expect(errorOccurred).toBe(true);
    }));
  });

  // Unit of work: replaceNfts
  // Scenario: user requests NFTs for specific chain and address via GET
  // Expected behavior: NFT data fetched and subjects notified
  describe('replaceNfts', () => {
    it('should_fetch_nfts_for_given_chain_and_address', fakeAsync(() => {
      // Arrange
      const chain = 'polygon';
      const address = '0x123abc';
      const expectedUrl = `${environment.nft_url}/nft/${chain}/${address}`;
      spyOn(console, 'log');

      // Act
      service.replaceNfts(chain, address);

      // Assert
      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockNftData);
      tick();

      expect(service.nftData).toEqual(mockNftData);
      expect(console.log).toHaveBeenCalledWith(mockNftData);
    }));

    it('should_use_default_chain_when_chain_parameter_is_null', fakeAsync(() => {
      // Arrange
      const address = '0x456def';
      const expectedUrl = `${environment.nft_url}/nft/eth/${address}`;
      service.chain = 'eth';

      // Act
      service.replaceNfts(null as any, address);

      // Assert
      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('GET');
      req.flush(mockNftData);
      tick();
    }));

    it('should_use_default_chain_when_chain_parameter_is_empty_string', fakeAsync(() => {
      // Arrange
      const address = '0x789ghi';
      const expectedUrl = `${environment.nft_url}/nft/eth/${address}`;
      service.chain = 'eth';

      // Act
      service.replaceNfts('', address);

      // Assert
      const req = httpMock.expectOne(expectedUrl);
      req.flush(mockNftData);
      tick();
    }));

    it('should_notify_chainDataUpdated_subject_when_data_received', fakeAsync(() => {
      // Arrange
      let notifiedData: any;
      service.chainDataUpdated.subscribe(data => {
        notifiedData = data;
      });

      // Act
      service.replaceNfts('bsc', '0xabc123');

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft/bsc/0xabc123`);
      req.flush(mockNftData);
      tick();

      expect(notifiedData).toEqual(mockNftData);
    }));

    it('should_return_nftData_after_assignment', fakeAsync(() => {
      // Arrange & Act
      const result = service.replaceNfts('eth', '0x123');

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft/eth/0x123`);
      req.flush(mockNftData);
      tick();

      expect(result).toEqual(mockNftData);
    }));

    it('should_handle_api_error_and_log_error_details', fakeAsync(() => {
      // Arrange
      spyOn(console, 'error');
      const errorResponse = new HttpErrorResponse({
        error: 'Invalid address',
        status: 400,
        statusText: 'Bad Request'
      });

      // Act
      service.replaceNfts('eth', 'invalid-address');

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft/eth/invalid-address`);
      req.flush('Invalid address', errorResponse);
      tick();

      expect(console.error).toHaveBeenCalled();
    }));
  });

  // Unit of work: replacePostNfts
  // Scenario: user requests NFTs via POST method
  // Expected behavior: NFT data posted and subjects notified
  describe('replacePostNfts', () => {
    it('should_post_chain_and_address_to_fetch_nfts', fakeAsync(() => {
      // Arrange
      const chain = 'avalanche';
      const address = '0xpost123';
      const expectedUrl = `${environment.nft_url}/nft`;
      const expectedBody = { chain, address };

      // Act
      service.replacePostNfts(chain, address);

      // Assert
      const req = httpMock.expectOne(expectedUrl);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(expectedBody);
      expect(req.request.headers.get('Accept')).toBe('application/json');
      req.flush(mockNftData);
      tick();

      expect(service.nftData).toEqual(mockNftData);
    }));

    it('should_use_default_chain_when_chain_parameter_is_falsy', fakeAsync(() => {
      // Arrange
      const address = '0xdefault';
      service.chain = 'polygon';

      // Act
      service.replacePostNfts('', address);

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      expect(req.request.body.chain).toBe('polygon');
      req.flush(mockNftData);
      tick();
    }));

    it('should_set_accept_application_json_header', fakeAsync(() => {
      // Act
      service.replacePostNfts('eth', '0x123');

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      expect(req.request.headers.get('Accept')).toBe('application/json');
      req.flush(mockNftData);
      tick();
    }));

    it('should_notify_chainDataUpdated_subject_after_post_success', fakeAsync(() => {
      // Arrange
      let notifiedData: any;
      service.chainDataUpdated.subscribe(data => {
        notifiedData = data;
      });

      // Act
      service.replacePostNfts('bsc', '0xpost456');

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      req.flush(mockNftData);
      tick();

      expect(notifiedData).toEqual(mockNftData);
    }));

    it('should_log_nft_data_to_console_after_receiving_response', fakeAsync(() => {
      // Arrange
      spyOn(console, 'log');

      // Act
      service.replacePostNfts('mumbai', '0xlog123');

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      req.flush(mockNftData);
      tick();

      expect(console.log).toHaveBeenCalledWith(mockNftData);
    }));

    it('should_return_nftData_after_post_completes', fakeAsync(() => {
      // Arrange & Act
      const result = service.replacePostNfts('goerli', '0xreturn123');

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      req.flush(mockNftData);
      tick();

      expect(result).toEqual(mockNftData);
    }));
  });

  // Unit of work: getChainData
  // Scenario: retrieve cached NFT data
  // Expected behavior: returns current nftData property
  describe('getChainData', () => {
    it('should_return_cached_nft_data_when_data_exists', () => {
      // Arrange
      service.nftData = mockNftData;
      spyOn(console, 'log');

      // Act
      const result = service.getChainData();

      // Assert
      expect(result).toEqual(mockNftData);
      expect(console.log).toHaveBeenCalledWith('chain', mockNftData);
    });

    it('should_return_undefined_when_no_data_loaded', () => {
      // Arrange
      service.nftData = undefined;

      // Act
      const result = service.getChainData();

      // Assert
      expect(result).toBeUndefined();
    });

    it('should_log_chain_and_data_to_console', () => {
      // Arrange
      service.nftData = { test: 'data' };
      spyOn(console, 'log');

      // Act
      service.getChainData();

      // Assert
      expect(console.log).toHaveBeenCalledWith('chain', { test: 'data' });
    });
  });

  // Unit of work: getTokens
  // Scenario: retrieve token array
  // Expected behavior: returns copy of tokens array
  describe('getTokens', () => {
    it('should_return_copy_of_tokens_array', () => {
      // Arrange
      service.tokens = ['token1', 'token2', 'token3'];

      // Act
      const result = service.getTokens();

      // Assert
      expect(result).toEqual(['token1', 'token2', 'token3']);
      expect(result).not.toBe(service.tokens); // Should be a copy, not reference
    });

    it('should_return_empty_array_when_no_tokens_exist', () => {
      // Arrange
      service.tokens = [];

      // Act
      const result = service.getTokens();

      // Assert
      expect(result).toEqual([]);
    });

    it('should_not_affect_original_array_when_returned_array_modified', () => {
      // Arrange
      service.tokens = ['original1', 'original2'];

      // Act
      const result = service.getTokens();
      result.push('modified');

      // Assert
      expect(service.tokens.length).toBe(2);
      expect(service.tokens).not.toContain('modified');
    });
  });

  // Unit of work: deleteNft
  // Scenario: user removes NFT from collection
  // Expected behavior: NFT filtered out and subject notified
  describe('deleteNft', () => {
    it('should_remove_nft_from_array_when_name_matches', () => {
      // Arrange
      service.nfts = ['CryptoPunk #1', 'Bored Ape #2', 'Azuki #3'];

      // Act
      service.deleteNft('Bored Ape #2');

      // Assert
      expect(service.nfts.length).toBe(2);
      expect(service.nfts).not.toContain('Bored Ape #2');
      expect(service.nfts).toContain('CryptoPunk #1');
      expect(service.nfts).toContain('Azuki #3');
    });

    it('should_notify_nftsUpdated_subject_after_deletion', () => {
      // Arrange
      service.nfts = ['NFT1', 'NFT2', 'NFT3'];
      let updatedNfts: any[];
      service.nftsUpdated.subscribe(nfts => {
        updatedNfts = nfts;
      });

      // Act
      service.deleteNft('NFT2');

      // Assert
      expect(updatedNfts!.length).toBe(2);
      expect(updatedNfts).not.toContain('NFT2');
    });

    it('should_handle_deletion_of_non_existent_nft_gracefully', () => {
      // Arrange
      service.nfts = ['NFT1', 'NFT2'];

      // Act
      service.deleteNft('NonExistentNFT');

      // Assert
      expect(service.nfts.length).toBe(2);
      expect(service.nfts).toEqual(['NFT1', 'NFT2']);
    });

    it('should_handle_empty_nfts_array_without_error', () => {
      // Arrange
      service.nfts = [];

      // Act & Assert
      expect(() => service.deleteNft('AnyNFT')).not.toThrow();
      expect(service.nfts.length).toBe(0);
    });
  });

  // Unit of work: collectChainData
  // Scenario: method invoked (stub implementation)
  // Expected behavior: throws not implemented error
  describe('collectChainData', () => {
    it('should_throw_not_implemented_error_when_called', () => {
      // Act & Assert
      expect(() => service.collectChainData()).toThrowError('Method not implemented.');
    });
  });

  // Unit of work: handleError (private method tested via public methods)
  // Scenario: HTTP error responses
  // Expected behavior: error logged and user-friendly message returned
  describe('handleError_via_collectNfts', () => {
    it('should_log_client_side_error_when_errorEvent_occurs', fakeAsync(() => {
      // Arrange
      spyOn(console, 'error');
      const errorEvent = new ErrorEvent('Network error', {
        message: 'Client-side error occurred'
      });

      // Act
      service.collectNfts().subscribe(
        () => fail('Should have failed'),
        () => {}
      );

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      req.error(errorEvent);
      tick();

      expect(console.error).toHaveBeenCalledWith('An error occurred:', 'Client-side error occurred');
    }));

    it('should_log_backend_error_with_status_code', fakeAsync(() => {
      // Arrange
      spyOn(console, 'error');
      const errorResponse = new HttpErrorResponse({
        error: 'Server error',
        status: 503,
        statusText: 'Service Unavailable'
      });

      // Act
      service.collectNfts().subscribe(
        () => fail('Should have failed'),
        () => {}
      );

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      req.flush('Server error', errorResponse);
      tick();

      expect(console.error).toHaveBeenCalledWith(
        'Backend returned code 503, body was: Server error'
      );
    }));

    it('should_return_observable_error_with_user_friendly_message', fakeAsync(() => {
      // Arrange
      let errorMessage: string;
      const errorResponse = new HttpErrorResponse({
        error: 'API down',
        status: 500,
        statusText: 'Internal Server Error'
      });

      // Act
      service.collectNfts().subscribe(
        () => fail('Should have failed'),
        (error: Error) => {
          errorMessage = error.message;
        }
      );

      // Assert
      const req = httpMock.expectOne(`${environment.nft_url}/nft`);
      req.flush('API down', errorResponse);
      tick();

      expect(errorMessage!).toBe('Something bad happened; please try again later.');
    }));
  });

  // Unit of work: complete user workflow
  // Scenario: user fetches NFTs, views data, and manages collection
  // Expected behavior: seamless data flow and state management
  describe('complete_user_workflow', () => {
    it('should_support_fetch_view_and_delete_workflow', fakeAsync(() => {
      // Arrange - Subscribe to updates
      let chainData: any;
      let nftsList: any[];
      service.chainDataUpdated.subscribe(data => chainData = data);
      service.nftsUpdated.subscribe(nfts => nftsList = nfts);

      // Act - Fetch NFTs via GET
      service.replaceNfts('eth', '0x123abc');
      const req = httpMock.expectOne(`${environment.nft_url}/nft/eth/0x123abc`);
      req.flush(mockNftData);
      tick();

      // Assert - Data loaded
      expect(chainData).toEqual(mockNftData);
      expect(service.getChainData()).toEqual(mockNftData);

      // Act - Add NFTs to collection and delete one
      service.nfts = ['NFT1', 'NFT2', 'NFT3'];
      service.deleteNft('NFT2');

      // Assert - NFT removed and subscribers notified
      expect(nftsList!).toEqual(['NFT1', 'NFT3']);
      expect(service.nfts.length).toBe(2);
    }));
  });
});