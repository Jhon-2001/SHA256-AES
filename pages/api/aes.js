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
	 const hash = await bcrypt.hash(text, Number(salt)) 
   console.log(hash);
		
   res.json({hash:hash})
}


