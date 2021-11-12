export interface ReceiptResponse {
  data: Receipt,
  request_id: string,
  result: string
}

export interface Receipt {
  merchant_name: string;
}

export interface AppState {
  readonly receipts: Receipt[]
}