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

C = (x)=> {
  return A(B(x))
}

A(B(I)) == C(I)
M(B(I)) == C(I)
B(I)(B(I)) == C(I)
