export * from './ENodeEnv.enums';
const OLD_ENV = process.env;

type THook = 'beforeEach' | 'afterEach' | 'beforeAll' | 'afterAll';
export const hooks: THook[] = [
  'beforeEach',
  'afterEach',
  'beforeAll',
  'afterAll',
];

let mockNodeEnv = global;

hooks.forEach(hook => {
  mockNodeEnv[hook] = hookCallback => {
    const copy = { ...hookCallback };
    jest.resetModules();
    process.env = { ...OLD_ENV };
    const args = (copy as Function).arguments;
    hookCallback(args);
  };
});

export default mockNodeEnv;
