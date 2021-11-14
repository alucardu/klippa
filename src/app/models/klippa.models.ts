export interface AppState {
  readonly receipts: Receipt[]
  readonly loader: Loader
  readonly snackbar: Snackbar
}

export interface ReceiptResponse {
  data: Receipt
  request_id: string
  result: string
}

export interface Receipt {
  amount: number
  amount_change: number
  amount_tip: number
  vatamount: number
  amountexvat: number
  currency: string
  purchasedate: string
  purchasetime: string
  merchant_name: string
  vatitems: VatItem[]
  lines: Line[]
}

export interface VatItem {
  amount: number
  amount_excl_vat: number
  amount_incl_vat: number
  amount_incl_excl_vat_estimated: boolean
  percentage: number
  code: string
}

export interface Line {
  description: string,
  lineitems: LineItem[]
}

export interface LineItem {
  title: string
  description: string
  amount: number
  amount_each: number
  amount_ex_vat: number
  vat_amount: number
  vat_percentage: number
  quantity: number
  unit_of_measurement: string
  sku: string
  vat_code: string
}

export interface Loader {
  loading: boolean
  parentComponent?: string
}

export interface Snackbar {
  message: string
}
