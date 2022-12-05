import User from "../models/User";

export const uploadVideo = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return;
  }

  try {
    const { title, description, url, keywords } = req.body;

    const createVideo = await Video.create({
      title: title,
      description: description,
      url: url,
      accessibility: accessibility,
      keywords: keywords,
      organizer: user._id,
      visibility: req.body.visibility || "public",
    });

    await createVideo.save();
    user.videos.push(createVideo._id);
    await user.save();

    res.status(200).json({
      ok: true,
      message: "Successfully created video.",
      data: {
        name: video.name,
        mimetype: video.mimetype,
        size: video.size,
      },
    });
  } catch (err) {
    return res.status(400).json({ ok: false, message: err });
  }
};
