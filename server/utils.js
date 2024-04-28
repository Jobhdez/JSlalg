// utils

export function compute(fn, req) {
  const exp = req.body.exp;
  const exp2 = req.body.exp2;

  const cleanExp = exp.replace(/'/g, '"');
  const cleanExp2 = exp.replace(/'/g, '"');
  const lalgExp = JSON.parse(cleanExp);
  const lalgExp2 = JSON.parse(cleanExp2);

  const result = fn(lalgExp, lalgExp2);

  return result;
}

export function computeOneParam(fn, req) {
  const exp = req.body.exp;
  const cleanExp = exp.replace(/'/g, '"');
  const lalgExp = JSON.parse(cleanExp);

  return fn(lalgExp);
}
