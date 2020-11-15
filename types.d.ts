declare namespace useConstructorTypes {
  type useConstructor = (callBack: useConstructorParams) => void;
  type useConstructorParams = () => Promise<void> | void;
}
export = useConstructorTypes;