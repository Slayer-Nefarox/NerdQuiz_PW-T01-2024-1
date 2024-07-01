import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { db, auth } from '../../../services/firebaseConnection';

export default function Networking_Score() {
  const [topUsers, setTopUsers] = useState([]);
  const [userScore, setUserScore] = useState(null);
  const [userPosition, setUserPosition] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carregamento inicial

  const category = 'Networking';

  useEffect(() => {
    // Função para buscar os top 5 usuários na categoria atual
    const getTopUsers = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where(`score_${category.toLowerCase()}`, ">=", 0), orderBy(`score_${category.toLowerCase()}`, "desc"), limit(5));
        const querySnapshot = await getDocs(q);

        let topUsersData = [];
        querySnapshot.forEach((doc) => {
          const userData = {
            name: doc.data().name, // Supondo que cada usuário tenha um campo 'name'
            score: doc.data()[`score_${category.toLowerCase()}`], // Pontuação na categoria atual
          };
          topUsersData.push(userData);
        });

        setTopUsers(topUsersData);
      } catch (error) {
        console.error("Erro ao buscar os top usuários:", error);
      } finally {
        setLoading(false); // Marca o carregamento como completo após buscar os usuários
      }
    };

    if (auth.currentUser) {
      getTopUsers();
    }
  }, [category]); // Executa sempre que a categoria muda

  useEffect(() => {
    // Função para buscar e calcular a posição do usuário atual no ranking
    const getUserPosition = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where(`score_${category.toLowerCase()}`, ">", 0), orderBy(`score_${category.toLowerCase()}`, "desc"));
        const querySnapshot = await getDocs(q);

        let currentPosition = 1;
        let foundUser = false;

        querySnapshot.forEach((doc) => {
          if (doc.id === auth.currentUser.uid) {
            foundUser = true;
          }
          if (!foundUser) {
            currentPosition++;
          }
        });

        setUserPosition(currentPosition);
        setUserScore(querySnapshot.docs.find(doc => doc.id === auth.currentUser.uid)?.data()[`score_${category.toLowerCase()}`] || null);
      } catch (error) {
        console.error("Erro ao buscar a posição do usuário:", error);
      }
    };

    if (auth.currentUser) {
      getUserPosition();
    }
  }, [category]); // Executa sempre que a categoria muda

  // Retorna uma mensagem de carregamento enquanto busca os dados
  if (loading) {
    return <div className='neon center'>Loading...</div>;
  }

  return (
    <div className="neon center">
      <div className="quiz">
        {/* Renderiza os top 5 usuários */}
        {topUsers.map((user, index) => (
          <div className="neon list_row" key={index}>
            <h3>{`${index + 1}: ${user.name} - Score: ${user.score}`}</h3>
          </div>
        ))}

        {/* Renderiza a posição e pontuação do usuário atual */}
        <div className="neon list_row">
          <h3>{`Score: ${userScore || "####"}, Position: ${userPosition || "####"}`}</h3>
        </div>

        {/* Link de volta para o Menu */}
        <Link to={"/score"} className="button neon alt list_row">Back</Link>
      </div>
    </div>
  );
}
