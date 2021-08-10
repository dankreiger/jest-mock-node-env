import { ENodeEnv, hooks } from '../src';

describe('jest-mock-node-env', () => {
  hooks.forEach(hook => {
    global[hook](() => {
      // test that the node environment is reset back to the default 'test'
      expect(process.env.NODE_ENV).toBe(ENodeEnv.TEST);
    });
  });

  it('allows mockings a development environment', () => {
    process.env.NODE_ENV = ENodeEnv.DEVELOPMENT;

    expect(process.env.NODE_ENV).toEqual(ENodeEnv.DEVELOPMENT);
  });

  it('allows mocking a production environment environment', () => {
    process.env.NODE_ENV = ENodeEnv.PRODUCTION;

    expect(process.env.NODE_ENV).toEqual(ENodeEnv.PRODUCTION);
  });

  it('allows mocking an environment with a custom name', () => {
    process.env.NODE_ENV = 'staging';

    expect(process.env.NODE_ENV).toEqual('staging');
  });
});
