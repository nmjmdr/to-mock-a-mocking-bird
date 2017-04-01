H = (x) => {
  return I
}

I = (x) => {
  return H
}

B = (x) => {
  return I
}

A = (x)=> {
  return H
}

M = (x)=>{
  return x(x)
}

P = (x) => {
  return A
}

compose = (a,b) => {
  return (x) => a(b(x))
}
// Q1
let x = B
let C = compose(P,B)
C(x) == P(B(x))
C = compose(P,M)
C(x) == P(M(x))
C = compose(P,x)
C(x) == P(x(x))
C = compose(P,C)
C(C) == P(C(C))

// Q2
M(M(x)) == M(x(x))
M(x(x)) == x(x)(x(x))
C = compose(M,M)
C(x) == M(M(x))
C(x) == x(x)(x(x))
//C(C) == C(C)(C(C)) //<== leads to Maximum call stack size exceeded
