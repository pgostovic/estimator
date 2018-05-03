import graphql from '../../lib/graphql';

export const getMakes = () => graphql(`{
  inventoryItemMetaData {
    vehicleMetaData {
      mmt {
        id
        name
      }
    }
  }
}`).then(resp => resp.inventoryItemMetaData.vehicleMetaData.mmt);

export const getModels = make => graphql(`{
  inventoryItemMetaData {
    vehicleMetaData {
      mmt(keyword: "${make}") {
        models {
          id
          name
        }
      }
    }
  }
}`).then(resp => resp.inventoryItemMetaData.vehicleMetaData.mmt[0].models);

export const getSubModels = (make, model) => graphql(`{
  inventoryItemMetaData {
    vehicleMetaData {
      mmt(keyword: "${make} ${model}") {
        models {
          subModels {
            id
            name
          }
        }
      }
    }
  }
}`).then(resp => resp.inventoryItemMetaData.vehicleMetaData.mmt[0].models[0].subModels);
