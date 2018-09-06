import getValueIfExist from "./getValueIfExist";

describe("getValueIfExist", ()=> {
  it("should get {}", ()=>{
    const abc = {};
    expect(getValueIfExist(()=>abc.ede.fgh)).toEqual({});
  });
  it("should get default if the last key is undefined", ()=>{
    const abc = {};
    expect(getValueIfExist(()=>abc.fgh, "default")).toEqual("default");
  });
  it("should get default value", ()=>{
    const abc = {};
    expect(getValueIfExist(()=>abc.ede.fgh, 5)).toEqual(5);
  });
  it("should be able to manage 0 and '' ", ()=>{
    const abc = {
      a: "",
      b: 0
    };
    expect(getValueIfExist(()=>abc.a, "not come here")).toEqual("");
    expect(getValueIfExist(()=>abc.b, "not come here")).toEqual(0);
  });
});