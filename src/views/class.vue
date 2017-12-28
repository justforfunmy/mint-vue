<template>
  <div>
      <m-header :has-back='true'>
          <div slot="title" class="title">Class</div>
      </m-header>
  </div>
</template>

<script>
import mHeader from "../components/header";

export default {
  components: {
    mHeader
  },
  methods: {
    init() {
      let writeName = "write";
      let long = "longName";
      class PersonClass {
        // 等价于 PersonType 构造器
        constructor(name) {
          this.name = name;
        }
        // 等价于 PersonType.prototype.sayName
        sayName() {
          console.log(this.name);
        }

        [writeName]() {
          console.log("write");
        }

        get [long]() {
          return this.name + "-long";
        }

        set [long](str) {
          this.name = str;
        }
        // 等价于 PersonType.create
        static create(name) {
          return new PersonClass(name);
        }
      }

      let person = new PersonClass("ins");
      person.sayName();
      person.write();

      //   person.longName('kinh');
      console.log(person.longName);

      console.log(
        person instanceof PersonClass,
        person instanceof Object,
        typeof PersonClass,
        typeof PersonClass.prototype.sayName
      );

      let person2 = PersonClass.create("sssssss");
      console.log(person2.longName);
    },
    inhire() {
      class Rectangle {
        constructor(length, width) {
          this.length = length;
          this.width = width;
        }

        getArea() {
          return this.length * this.width;
        }
      }

      class Square extends Rectangle{
          constructor(length){
              // 与 Rectangle.call(this, length, length) 相同
              super(length,length)
          }
      }

      let square = new Square(3);
      console.log(square.getArea(),square instanceof Square,square instanceof Rectangle)
    }
  },
  mounted() {
    this.init();
    this.inhire()
  }
};
</script>

<style lang="scss" scoped>

</style>

