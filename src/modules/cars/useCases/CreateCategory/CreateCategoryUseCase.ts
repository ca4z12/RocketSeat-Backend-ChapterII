import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}


class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest) {
        const category = this.categoriesRepository.findByName(name);

        if(category) {
            throw new Error("This category already exists!")
        }

        this.categoriesRepository.create({ name, description })
    }
}

export { CreateCategoryUseCase }