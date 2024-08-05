Contract
Visibility and Getters
Since Solidity knows two kinds of function calls (internal ones that do not create an actual EVM call (also called a “message call”) and external ones that do), there are four types of visibilities for functions and state variables.

Functions can be specified as being external, public, internal or private, where the default is public. For state variables, external is not possible and the default is internal.

external:
External functions are part of the contract interface, which means they can be called from other contracts and via transactions. An external function f cannot be called internally (i.e. f() does not work, but this.f() works). External functions are sometimes more efficient when they receive large arrays of data.
public:
Public functions are part of the contract interface and can be either called internally or via messages. For public state variables, an automatic getter function (see below) is generated.
internal:
Those functions and state variables can only be accessed internally (i.e. from within the current contract or contracts deriving from it), without using this.
private:
Private functions and state variables are only visible for the contract they are defined in and not in derived contracts.
Note

Everything that is inside a contract is visible to all external observers. Making something private only prevents other contracts from accessing and modifying the information, but it will still be visible to the whole world outside of the blockchain.
The visibility specifier is given after the type for state variables and between parameter list and return parameter list for functions.

pragma solidity ^0.4.0;

contract C {
    function f(uint a) private returns (uint b) { return a + 1; }
    function setData(uint a) internal { data = a; }
    uint public data;
}
In the following example, D, can call c.getData() to retrieve the value of data in state storage, but is not able to call f. Contract E is derived from C and, thus, can call compute.

// This will not compile

pragma solidity ^0.4.0;
