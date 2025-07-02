export class HelloService {
  constructor(
    private helloRepo: HelloRepo,
    private count: number = 5
  ) {}

  greet(): string {
    console.log(this.count);
    return `hello Service: ${this.helloRepo.greet()} count is: ${this.count}`;
  }
}
