export interface IMeta {
	title: string
	description: string
}

export interface IProject {
	url: string
	image: string
	title: string
	description: string
	scope: string
	role: string
}


export interface IHardSkills {
	title: string
	progress?: boolean
}

export interface ISkills {
	tools: Array<string>
	hardSkills: Array<hardSkills>
}