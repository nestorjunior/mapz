import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Item } from '../entity/Item';

export async function saveItems(request: Request, response: Response) {
  const itemRepository = getRepository(Item);
  const savedItem = await itemRepository.save(request.body);
  return response.status(200).json(savedItem);
}

export async function getItems(request: Request, response: Response) {
  const itemRepository = getRepository(Item);
  const allItems = await itemRepository.find();
  return response.json(allItems);
}
