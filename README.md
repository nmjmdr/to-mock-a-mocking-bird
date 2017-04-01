# To mock a mocking bird - solutions

> A certain enchanted forest is inhabited by talking birds. Given any birds A and B, if you call out the name of B to A, then A will respond by calling out the name of some bird to you; this bird we designate AB. Thus AB is the bird named by A upon hearing the name of B."

## Chapter 9.
### Q 1.
A is fond of B => AB = B (A's response to B is B)
Given conditions:
1. C1: Cx = A(Bx)
2. C2: There is a mocking bird Mx = xx

Which of these is true:
1. Every bird in the forest is fond of atleast one bird
2. There is atleast one bird that is not fond of any bird


```
Soln:
Assuming this is true: "There is atleast one bird that is not fond of any bird" and such a bird "P" exists:
Px != x for any x
Given C1: Cx = A(Bx), for any A and B, there is a C which composes A and B, for any x
Let A be M and B be P
Cx = A(Bx)
Cx = P(Mx)
Mx equals xx
Cx = P(xx)
As x can be any bird, lets say x = C
Hence:
CC = P(CC), Thus P is fond of CC
```
_Thus there is no bird "P" such that it is NOT fond of other bird, or in other words: every bird is fond of atleast one bird_

### Q 2.
A bird is egocentric if xx = x
Given conditions C1 and C2 of previous problem, prove that at least one bird is egocentric

```
Soln:
Assume that no bird is egocentric => xx != x for all x, let us disprove this
M(Mx) = M(xx) = xx(xx)
M(Mx) = Cx
Cx = xx(xx),
let x = C, then
CC = CC(CC)
Thus CC is fond of itself(CC), Hence there at least one bird that is egocentric
```
