import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepository: SpecificationsRepository) {}

    execute({ name, description }: IRequest) {
        const specification = this.specificationsRepository.findByName(name)

        if(specification) {
            throw new Error("This specification already exists")
        }

        this.specificationsRepository.create({ name, description })
    }
}

export { CreateSpecificationUseCase }