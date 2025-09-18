const { dbHelpers } = require("../config/firebase-db.config");
const { sendEmail } = require('../services/email.service');

exports.createCampaign = async (req, res) => {
  try {
    const { clientId, clientName, stage, location, name, status, type, recipients } = req.body;
    
    if (!clientName) {
      return res.status(400).json({ error: 'Missing required field: clientName' });
    }

    const campaignData = {
      id: Date.now().toString(),
      name: name || `${clientName}_${stage || 'Seed'}_Outreach`,
      clientId: clientId || null,
      clientName,
      location: location || 'US',
      type: type || 'Email',
      status: status || 'draft',
      recipients: recipients || 0,
      createdAt: new Date().toISOString(),
      audience: [],
      emailTemplate: { subject: '', content: '' },
      schedule: null
    };

    res.status(201).json({
      success: true,
      campaign: campaignData
    });
  } catch (error) {
    console.error('Campaign creation error:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getCampaigns = async (req, res) => {
  try {
    // Mock campaigns data
    const campaigns = [
      {
        id: '1',
        name: 'TechStartup_Seed_Outreach',
        type: 'Email',
        status: 'Active',
        recipients: 15,
        createdAt: new Date().toISOString(),
        stats: { sent: 15, opened: 8, clicked: 3, replies: 1 }
      }
    ];

    res.json({
      success: true,
      campaigns
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCampaignById = async (req, res) => {
  try {
    const { id } = req.params;

    // Mock campaign data
    const campaign = {
      id,
      name: 'TechStartup_Seed_Outreach',
      clientId: '123',
      clientName: 'TechStartup',
      type: 'Email',
      status: 'Draft',
      recipients: 0,
      createdAt: new Date().toISOString(),
      audience: [],
      emailTemplate: { subject: '', content: '' }
    };

    res.json({
      success: true,
      campaign
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Mock update - in real app, update in database
    const updatedCampaign = {
      id,
      ...updateData,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      campaign: updatedCampaign
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Matchmaking endpoint
exports.getMatches = async (req, res) => {
  try {
    const { sector, stage, location, amount } = req.body;
    
    // Mock investor matches with scoring
    const matches = [
      {
        id: '1',
        name: 'TechVentures Capital',
        email: 'invest@techventures.com',
        focus: 'SaaS, Fintech',
        stage: 'Seed, Series A',
        location: 'US',
        score: 95
      },
      {
        id: '2', 
        name: 'Innovation Partners',
        email: 'deals@innovation.com',
        focus: 'AI, Healthcare',
        stage: 'Seed',
        location: 'US',
        score: 87
      }
    ];

    res.json({
      success: true,
      matches
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Send campaign emails
exports.sendCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const { schedule } = req.body;

    // Mock sending logic
    res.json({
      success: true,
      message: 'Campaign sent successfully',
      campaignId: id
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
