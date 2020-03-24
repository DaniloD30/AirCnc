// index, show, store, update, destroy
const Spot = require('../models/Spot')
module.exports = {

  async index(req, res){
    //retorna uma lista de spots
    
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech})

    // if(!spots){
      
    // }

    return res.json(spots)
  },

  async store(req, res) {
    const {filename} = req.file;
    const {company, techs, price} = req.body;
    const {user_id} = req.headers;
     
    const user = await user.findById(user_id);
    
    if (!user){
      return res.status(400).json({error: 'User does not exists'})
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      company ,
      techs: techs.split(',').map( tech => tech.trim()),
      price,
    })
    return res.json(spot)
  }
};

// thumbmail: String,
// company: String,
// price: Number,
// techs: [String],
// user: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'User'
// }