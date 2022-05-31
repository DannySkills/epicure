import { Chef } from "../../interfaces/chef";

export const CHEF_LOADING = "CHEF_LOADING";
export const CHEF_FAIL = "CHEF_FAIL";
export const CHEF_SUCCESS = "CHEF_SUCCESS";

export interface ChefLoading {
  type: typeof CHEF_LOADING;
}

export interface ChefFail {
  type: typeof CHEF_FAIL;
}

export interface ChefSuccess {
  type: typeof CHEF_SUCCESS;
  payload: Chef;
}

export type ChefDispatchTypes = ChefLoading | ChefFail | ChefSuccess;
