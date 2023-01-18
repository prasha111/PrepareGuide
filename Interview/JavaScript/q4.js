function fail() {
    try {
      console.log("try 1");
      throw new Error("Throw");
      console.log("try 2");
    } catch (e) {
      console.log("catch", e);
      return;
    } finally {
      console.log("finally");
      return "finally";
    }
    console.log("hurray");
  }
  
  fail()