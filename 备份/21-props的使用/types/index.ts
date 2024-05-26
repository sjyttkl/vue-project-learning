
//定一个接口，用于限制person对象的具体属性
//export 分别暴露； 暴露有以下几类：1. 默认暴露 2。 分别暴露，3.统一暴露

export interface PersonInter {
    id:string,
    name:string,
    age:number
}

// export const a = 9

//一个自定义类型
export type Persons = Array<PersonInter>

export type Persons2 = PersonInter[]