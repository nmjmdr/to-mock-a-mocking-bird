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

C = (x)=> {
  return P(B(x))
}

var x = B
C(x) == P(B(x))
C(x) == P(M(x))
C(x) == P(x(x))
C(C) == P(C(C))
