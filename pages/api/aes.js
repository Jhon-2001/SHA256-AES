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
	const d = new Date();
if (salt< 19){
  const hash = await bcrypt.hash(text, Number(salt)) 
	const date = new Date() -d
  res.json({hash:hash, date:date})
}
else 

res.json({hash:"Salting must be between 1 and 18."})


    
}


