QUnit.test('Reflect.deleteMetadata', assert => {
  const { defineMetadata, hasOwnMetadata, deleteMetadata } = core.Reflect;
  const { create } = core.Object;
  assert.isFunction(deleteMetadata);
  assert.arity(deleteMetadata, 2);
  assert.throws(() => deleteMetadata('key', undefined, undefined), TypeError);
  assert.same(deleteMetadata('key', {}, undefined), false);
  let object = {};
  defineMetadata('key', 'value', object, undefined);
  assert.same(deleteMetadata('key', object, undefined), true);
  const prototype = {};
  defineMetadata('key', 'value', prototype, undefined);
  assert.same(deleteMetadata('key', create(prototype), undefined), false);
  object = {};
  defineMetadata('key', 'value', object, undefined);
  deleteMetadata('key', object, undefined);
  assert.same(hasOwnMetadata('key', object, undefined), false);
});
