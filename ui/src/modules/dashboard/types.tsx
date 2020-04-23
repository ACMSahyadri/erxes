export interface IDashboard {
  _id: string;
  name: string;
}

export interface IDashboardItem {
  _id: string;
  dashboardId: string;
  layout: string;
  vizState: string;
  name: string;
}

export type DashboardItemsQueryResponse = {
  dashboardItems: IDashboardItem[];
  loading: boolean;
};

export type DashboardItemDetailsQueryResponse = {
  dashboardItem: IDashboardItem;
  loading: boolean;
};

export type EditDashboardItemMutationVariables = {
  _id: string;
  layout: string;
  vizState?: string;
  name?: string;
  dashboardId?: string;
};

export type AddDashboardItemMutationVariables = {
  layout: string;
  vizState: string;
  name: string;
  dashboardId: string;
};

export type AddDashboardItemMutationResponse = {
  addDashboardItemMutation: (
    params: {
      variables: AddDashboardItemMutationVariables;
    }
  ) => Promise<void>;
};

export type EditDashboardItemMutationResponse = {
  editDashboardItemMutation: (
    params: {
      variables: EditDashboardItemMutationVariables;
    }
  ) => Promise<void>;
};
