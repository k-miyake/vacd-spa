import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    context.res = {
        body: { 
          msg: "「" + context.req.body.issueData.title + "」を登録しました" 
        }
    };
};

export default httpTrigger;
