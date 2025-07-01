export class HelloService {
  constructor(private helloRepo: HelloRepo) {}

  async greet(): Promise<Hello> {
    return this.helloRepo.greet();
  }
}
