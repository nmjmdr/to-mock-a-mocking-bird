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
C = M(Px)
C = Px, Now x is any bird. So x can be C
Implies:
C = PC
```
_Thus there is no bird "P" such that it is NOT fond of other bird, or in other words: every bird is fond of atleast one bird_
