import axios from 'axios';
import { FreeObject } from '../contracts/misc';

export abstract class BaseService<T> {
	protected url: string;

	constructor(url: string) {
		this.url = url;
	}
    
  
    
    getToken = () => {
        return localStorage.getItem('token')
    }
    
    setHeaders = () => {
        return{ headers: {'Authorization' : 'Bearer ' + this.getToken()}}
    }

	async fetch(params?: FreeObject) {
		const { data } = await axios.get<T[]>( this.resolveURL(params), this.setHeaders());
		return data;
	}

	async fetchOne(id: any, params?: FreeObject) {
		const { data } = await axios.get<T>( `${this.resolveURL(params)}/${id}`, this.setHeaders());
		return data;
	}

	async create(payload: T, params?: FreeObject) {
		const { data } = await axios.post( `${this.resolveURL(params)}`, this.setHeaders() );
		return data;
	}

	async update(id: any, payload: Partial<T>, params?: FreeObject) {
		const { data } = await axios.put(`${ this.resolveURL(params)}/${id}`, this.setHeaders() );
		return data;
	}

	async delete(id: any, params?: FreeObject) {
		await axios.delete(`${this.resolveURL( params)}/${id}`, this.setHeaders());
	}

	protected resolveURL(params?: FreeObject) {
		return `${this.url}${params ? `?${new URLSearchParams(params).toString()}` : ''}`;
	}
}
