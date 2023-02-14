import { Cat } from "./test.model";
import { Router, Request, Response, NextFunction } from "express";
import { addCat, deleteCatWithId, getCats, getCatWithId, patchCatWithId, updateCatWithId } from "./test.service";

export const TestRouter: Router = Router();

TestRouter.get("/cats", getCats);
TestRouter.get("/cat/:id", getCatWithId);
TestRouter.post("/cat", addCat);
TestRouter.put("/cat/:id", updateCatWithId);
TestRouter.patch("/cat/:id", patchCatWithId);
TestRouter.delete("/cat/:id", deleteCatWithId);
