export = useConstructor;
export as namespace useConstructor;
declare namespace useConstructor {
  type useConstructorType = (callBack: useConstructorParams) => void;
  type useConstructorParams = () => Promise<void> | void;
}
