const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");
// const mongoose = require("mongoose");

//create inventory 
const createInventoryController = async(req,res) =>{
    try{
        const {email,inventoryType} = req.body;
        console.log(email);
        //validation
        const user = await userModel.findOne({email});
        if(!user){
            throw new Error('user not found');
        }
        // if(inventoryType ==="in" && user.role !== 'donar'){
        //     throw new Error('Not a donar account');
    // }
        if(inventoryType ==='out' && user.role !== 'hospital'){
            throw new Error("Not a hospital ");
        }
        //save record
        const inventory = new inventoryModel(req.body);
        await inventory.save();
        return res.status(201).send({
            success:true,
            message:"new blood record added",
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message:"error in inventory api",
            error
        });
    };
};

//get all blood records
const getInventoryController = async(req,res)=> {
    try{
        const inventory = await inventoryModel.find({organisation:req.body.userId})
        .populate('donar')
        .populate('hospital')
        .sort({createdAt: -1});
        return res.status(200).send({
            success:true,
            message:'get all records successfully',
            inventory,
        });

    } catch(error) {
        console.log (error)
        return res.status(500).send({
            success:false,
            message:'error in get all inventory',
            error 
        });

    }

};
module.exports = {createInventoryController, getInventoryController};