import axios from 'axios';
import newsService from '../newsService';
import { CATEGORY_BASE_URL, JWT_TOKEN } from '../../config';

jest.mock('axios');
const mockedAxios = axios;

describe('NewsService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn(() => null),
            },
            writable: true
        });
        global.alert = jest.fn();
    });

    describe('createCategory', () => {
        it('should create category successfully', async () => {
            const mockValues = {
                name: 'Tech News',
                description: 'Technology related news'
            };

            mockedAxios.post.mockResolvedValue({ data: { id: 1, ...mockValues } });

            await newsService.createCategory(mockValues);

            expect(mockedAxios.post).toHaveBeenCalledWith(
                `${CATEGORY_BASE_URL}/categories`,
                mockValues,
                {
                    headers: {
                        Authorization: `Bearer ${JWT_TOKEN}`
                    }
                }
            );
            expect(global.alert).toHaveBeenCalledWith('Category created successfully!');
        });

        it('should handle category creation error', async () => {
            const mockValues = { name: 'Test Category' };
            const consoleError = jest.spyOn(console, 'error').mockImplementation();

            mockedAxios.post.mockRejectedValue(new Error('API Error'));

            await newsService.createCategory(mockValues);

            expect(consoleError).toHaveBeenCalledWith('Error creating category:', expect.any(Error));
            expect(global.alert).toHaveBeenCalledWith('Error creating category. Please check the console for details.');
            
            consoleError.mockRestore();
        });
    });

    describe('addNews', () => {
        it('should add news to category', async () => {
            const categoryId = 1;
            const mockCategory = {
                id: 1,
                name: 'Tech',
                news: [{ title: 'Existing News', url: 'https://existing.com' }]
            };
            const newNews = { title: 'New Article', url: 'https://newarticle.com' };

            mockedAxios.get.mockResolvedValue({ data: mockCategory });
            mockedAxios.put.mockResolvedValue({ data: mockCategory });

            await newsService.addNews(categoryId, newNews);

            expect(mockedAxios.get).toHaveBeenCalledWith(`${CATEGORY_BASE_URL}/categories/${categoryId}`, {
                headers: { Authorization: `Bearer ${JWT_TOKEN}` }
            });

            expect(mockedAxios.put).toHaveBeenCalledWith(
                `${CATEGORY_BASE_URL}/categories/${categoryId}`,
                expect.objectContaining({
                    news: expect.arrayContaining([
                        { title: 'Existing News', url: 'https://existing.com' },
                        newNews
                    ])
                }),
                { headers: { Authorization: `Bearer ${JWT_TOKEN}` } }
            );
        });
    });

    describe('getCategories', () => {
        it('should fetch all categories', async () => {
            const mockCategories = [
                { id: 1, name: 'Tech', description: 'Technology news' },
                { id: 2, name: 'Science', description: 'Science updates' }
            ];

            mockedAxios.get.mockResolvedValue({ data: mockCategories });

            const result = await newsService.getCategories();

            expect(mockedAxios.get).toHaveBeenCalledWith(`${CATEGORY_BASE_URL}/categories`);
            expect(result).toEqual(mockCategories);
        });
    });

    describe('getCategory', () => {
        it('should fetch single category by id', async () => {
            const categoryId = 1;
            const mockCategory = { id: 1, name: 'Tech', description: 'Technology' };

            mockedAxios.get.mockResolvedValue({ data: mockCategory });

            const result = await newsService.getCategory(categoryId);

            expect(mockedAxios.get).toHaveBeenCalledWith(`${CATEGORY_BASE_URL}/categories/${categoryId}`);
            expect(result).toEqual(mockCategory);
        });
    });
});