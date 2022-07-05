// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from "bcrypt";
import crypto from "crypto";
import sha256 from "crypto-js/sha256";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	switch (req.method) {
		case "POST":
			await hash(req, res);
			break;
	}
};


const hash = async (req, res) => {
	const { salt, text } = req.body;

  const hash = await crypto.createHmac('sha256', text).update("json").digest("base64"); 
  res.json({hash:hash})

    
}


