import { SET_MATERIALS } from './types';


export function setMaterials(materials) {
  return {
    type: SET_MATERIALS,
    materials
  }
}
