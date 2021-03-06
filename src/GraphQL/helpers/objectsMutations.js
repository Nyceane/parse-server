import rest from '../../rest';

const createObject = async (className, fields, config, auth, info) => {
  if (!fields) {
    fields = {};
  }

  return (await rest.create(config, auth, className, fields, info.clientSDK))
    .response;
};

const updateObject = async (
  className,
  objectId,
  fields,
  config,
  auth,
  info
) => {
  if (!fields) {
    fields = {};
  }

  return (await rest.update(
    config,
    auth,
    className,
    { objectId },
    fields,
    info.clientSDK
  )).response;
};

const deleteObject = async (className, objectId, config, auth, info) => {
  await rest.del(config, auth, className, objectId, info.clientSDK);
  return true;
};

export { createObject, updateObject, deleteObject };
