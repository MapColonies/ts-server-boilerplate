export interface IResourceNameModel {
    id: number,
    name: string,
    description: string
}

export class ResourceNameManager {
  public getResource(): IResourceNameModel {
    return {
        id: 1,
        name: 'ronin',
        description: 'can you do a logistics run?'
    }
  }
}
