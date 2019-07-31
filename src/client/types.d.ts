export interface State {
  username: String;
  totalPaid: Number;
  totalItemsRecycled: Number;
  recyclingHistory: Recycling[];
  glass: GreaterLess;
  plastic: GreaterLess;
  metal: GreaterLess;
  type: Types;
}

export interface Types {
  glass: GreaterLess;
  plastic: GreaterLess;
  metal: GreaterLess;
}
export interface Recycling {
  date: Date;
  amountPair: Number;
  amountRecycled: Number;
}

export interface GreaterLess {
  lessThan: Number;
  greaterThan: Number;
}

export type Material = string;

export interface Type {
  totalPrice: Number;
  totalCount: Number;
}
