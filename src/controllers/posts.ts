import { Request, Response, NextFunction } from 'express';
import { pages } from '../data/pages';
import { posts } from '../data/posts';

export const municipal = async (req: Request, res: Response, next: NextFunction) => {
    try {
        //  Fetch Municipality Page
        const Municipality = 'Municipality';
        const municipalityResults = pages.find((page) => page.title === Municipality);

        if (!municipalityResults) {
            return res.status(404).json({
                message: 'No Data Found'
            });
        }

        //  Get Municipality Posts

        let municipalCategories = municipalityResults.content.map((item) => item.properties.categories);

        let mergedList: string[] = [];
        municipalCategories.forEach((element) => {
            element.forEach((el) => {
                mergedList.push(el);
            });
        });

        // Compare CategoryList with posts.categories
        const finalResults = posts.filter((item: any) => mergedList.indexOf(item.category) !== -1);

        return res.status(200).json({
            data: finalResults
        });
    } catch (err) {
        return res.status(500).json({
            error: 'Server Error',
            message: err.message
        });
    }
};
