import { chefData } from "../data/chef";
import { Chef } from "../interfaces/chef";

const getChefData = () => {
  return new Promise<Chef>((resolve, reject) => {
    setTimeout(() => {
      resolve(chefData);
    }, 2000);
  });
};

const ChefService = {
  getChefData,
};

export default ChefService;
