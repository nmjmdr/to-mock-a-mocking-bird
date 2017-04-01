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


C = (a,b) => {
  return (x) => a(b(x))
}
// Q1
let x = B
C(P,B)(x) == P(B(x))
C(P,M)(x) == P(M(x))
C(P,x)(x) == P(x(x))
C(P,C)(C) == P(C(C))
