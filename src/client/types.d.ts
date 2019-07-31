export interface State {
  username: String;
  totalPaid: Number;
  totalItemsRecycled: Number;
  recyclingHistory: Recycling[];
}

export interface Recycling {
  date: Date;
  amountPair: Number;
  amountRecycled: Number;
}
