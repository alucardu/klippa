export interface AppState {
  readonly receipts: Receipt[]
  readonly loader: Loader
}

export interface ReceiptResponse {
  data: Receipt,
  request_id: string,
  result: string
}

export interface Receipt {
  merchant_name: string;
}

export interface Loader {
  loading: boolean,
  parentComponent?: string
}
