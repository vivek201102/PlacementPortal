export const basicUrl = 'https://localhost:7012/api';

export const apis = {
    getAllSkills: `${basicUrl}/Skill`,
    addSkill: `${basicUrl}/Skill`,
    getStudentById: `${basicUrl}/Student`,
    getSkillOfStudent: `${basicUrl}/StudentSkill`,
    getSkillId: `${basicUrl}/Skill/findId`,
    addSkillOfStudent: `${basicUrl}/StudentSkill`,
    deleteSkillOfStudent: `${basicUrl}/StudentSkill`,
    getEducationByStudent: `${basicUrl}/Education`,
    updateEducationByStudent: `${basicUrl}/Education`,
    addEducationByStudent: `${basicUrl}/Education`,
    deleteEducationById: `${basicUrl}/Education`,
    getExperienceByStudent: `${basicUrl}/Experience`,
    addExperienceByStudent: `${basicUrl}/Experience`,
    deleteExperienceById: `${basicUrl}/Experience`,
    updateExperienceByStudent: `${basicUrl}/Experience`
}