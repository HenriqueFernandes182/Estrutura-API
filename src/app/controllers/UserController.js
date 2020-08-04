import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: ['uid', 'name', 'age', 'email'],
      });

      return res.json({ users });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const user = await User.findOne({ where: { uid } });

      return res.json({ user });
    } catch (error) { }
    return res.json({ error });
  }

  async store(req, res) {
    try {
      if (req.body.age < 18) {
        throw Error('Usuário menor de idade.');
      }
      const user = await User.create(req.body);

      return res.json({ user });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json(response);
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;

      const [updated] = await User.update(req.body, { where: { uid } });

      if (!updated[0]) {
        throw Error('Usuário não encontrado');
      }

      return res.json({ result: 'DATA_UPDATED' });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await User.destroy({ where: { uid } });

      if (!deleted) {
        throw Error('Usuário não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new UserController();
