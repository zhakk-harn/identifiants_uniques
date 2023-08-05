import idUnique from "@zhakk_harn/identifiants_uniques"

for (let i = 0; i < 5; i++) {
  console.log(idUnique());
}

const genCount = 5000;
const result = test(genCount);

console.log(`
gen before dup : ${result.count}
time per dup : ${result.duration / 1000}s
overall time : ${result.duration * genCount / 1000}s
`)

function test(iterationCount) {
  let results = [];

  for (let i = 0; i < iterationCount; i++) {
    const outputs = [];
    const start = performance.now();

    let o = null;
    while (!outputs.includes(o)) {
      if (o) {
        outputs.push(o);
      }
      o = idUnique();
    }

    const duration = performance.now() - start;
    results.push({ count: outputs.length, duration });
  }

  const sums = results.reduce((acc, el) => {
    acc.count += el.count;
    acc.duration += el.duration;
    return acc;
  }, { count: 0, duration: 0 })

  const average = { count: sums.count / results.length, duration: sums.duration / results.length }
  return average;
}