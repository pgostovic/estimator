import graphql from '../../lib/graphql';

export const getMakes = () => graphql(`{
  inventoryItemMetaData {
    vehicleMetaData {
      mmt {
        name
      }
    }
  }
}`).then(resp => resp.inventoryItemMetaData.vehicleMetaData.mmt.map(make => make.name));

export const getModels = make => graphql(`{
  inventoryItemMetaData {
    vehicleMetaData {
      mmt(keyword: "${make}") {
        models {
          name
        }
      }
    }
  }
}`).then(resp => resp.inventoryItemMetaData.vehicleMetaData.mmt[0].models.map(model => model.name));

export const getSubModels = (make, model) => graphql(`{
  inventoryItemMetaData {
    vehicleMetaData {
      mmt(keyword: "${make} ${model}") {
        models {
          subModels {
            name
          }
        }
      }
    }
  }
}`).then(resp => resp.inventoryItemMetaData.vehicleMetaData.mmt[0].models[0].subModels.map(subModel => subModel.name));
