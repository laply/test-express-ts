import { Request, Response } from "express";
import { Cat } from "./test.model";

export const getCats = (_: Request, res: Response) => {
  res.send({ cats: Cat });
};
export const getCatWithId = (req: Request, res: Response) => {
  {
    try {
      const params = req.params;
      const cat = Cat.find((cat) => cat.id === params.id);

      res.status(200).send({
        success: true,
        data: cat,
      });
    } catch (error: any) {
      res.status(400).send({
        success: false,
        error: error?.message,
      });
    }
  }
};
export const addCat = (req: Request, res: Response) => {
  try {
    const data = req.body;
    Cat.push(data);

    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error?.message,
    });
  }
};
export const updateCatWithId = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const data = req.body;
    const cat = Cat.find((cat) => cat.id === params.id);
    if (cat) {
      cat.name = data.name;
      cat.age = data.age;
      cat.species = data.species;
      cat.isCute = data.isCute;
      cat.friends = data.friends;
    }
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error?.message,
    });
  }
};
export const patchCatWithId = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const data = req.body;
    const cat = Cat.find((cat) => cat.id === params.id);

    if (cat) {
      cat.name = data.name ?? cat.name;
      cat.age = data.age ?? cat.age;
      cat.species = data.species ?? cat.species;
      cat.isCute = data.isCute ?? cat.isCute;
      cat.friends = data.friends ?? cat.friends;
    }
    res.status(200).send({
      success: true,
      data: cat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error?.message,
    });
  }
};
export const deleteCatWithId = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const cat = Cat.find((cat) => cat.id === params.id);
    if (cat) {
      Cat.splice(Cat.indexOf(cat), 1);
    }
    res.status(200).send({
      success: true,
      data: cat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error?.message,
    });
  }
};
